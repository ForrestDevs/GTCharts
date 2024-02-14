

export interface KLineData {
	timestamp: number;
	open: number;
	high: number;
	low: number;
	close: number;
	volume?: number;
	turnover?: number;
}

// Assume this is your parse function
export function parseFileContent(content: string): any {
  // Parse the content to create klineData
  // This is a placeholder. Implement according to your data structure
  const klineData = content.split('\n').map(line => {
    // Split each line and parse accordingly
    const parts = line.split(',');
    // Assuming a CSV format for this example

    //console.log(parts)

    const bar: KLineData = {
      timestamp: new Date(parts[0]).getTime(),
      open: parseFloat(parts[1]),
      high: parseFloat(parts[2]),
      low: parseFloat(parts[3]),
      close: parseFloat(parts[4]),
      volume: parseFloat(parts[5]),
    };

    console.log("Bar: ", bar, "Parts: ", parts)

    return bar;
  });

  return klineData;
}

export function generatedDataList (baseTimestamp?: number, basePrice?: number, dataSize?: number) {
  const dataList: KLineData[] = []
  let timestamp = Math.floor((baseTimestamp ?? Date.now()) / 60 / 1000) * 60 * 1000
  let baseValue = basePrice ?? 5000
  const length = dataSize ?? 800
  const prices = []
  for (let i = 0; i < length; i++) {
    baseValue = baseValue + Math.random() * 20 - 10
    for (let j = 0; j < 4; j++) {
      prices[j] = (Math.random() - 0.5) * 12 + baseValue
    }
    prices.sort()
    const openIdx = +Math.round(Math.random() * 3).toFixed(0)
    let closeIdx = +Math.round(Math.random() * 2).toFixed(0)
    if (closeIdx === openIdx) {
      closeIdx++
    }
    const volume = Math.random() * 50 + 10
    const kLineData: KLineData = {
      open: prices[openIdx],
      low: prices[0],
      high: prices[3],
      close: prices[closeIdx],
      volume: volume,
      timestamp
    }
    timestamp -= 60 * 1000
    kLineData.turnover = (kLineData.open + kLineData.close + kLineData.high + kLineData.low) / 4 * volume
    dataList.unshift(kLineData)
  
  }
  return dataList
}


// Helper function to read and parse CSV file
// function parseCSV(filePath: string): Promise<KLineData[]> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       Papa.parse(data, {
//         header: true,
//         complete: (results) => {
//           const kLineData = results.data.map((row: any) => ({
//             timestamp: new Date(row.date).getTime(), // Assuming 'date' column exists and is in a recognizable date format
//             open: parseFloat(row.open),
//             high: parseFloat(row.high),
//             low: parseFloat(row.low),
//             close: parseFloat(row.close),
//             volume: parseFloat(row.volume),
//             // turnover is not present in the CSV, so we calculate it if needed
//             turnover: (parseFloat(row.open) + parseFloat(row.close) + parseFloat(row.high) + parseFloat(row.low)) / 4 * parseFloat(row.volume),
//           }));
//           resolve(kLineData);
//         },
//         error: (error) => reject(error),
//       });
//     });
//   });
// }


// export function dataFromCSV(filePath: string): KLineData[] {
//   const dataList: KLineData[] = []
//   parseCSV(filePath)
//     .then(d => {
//       dataList.push(...d);
//     })
//     .catch(error => {
//       console.error('Error parsing CSV file:', error);
//     });
//   return dataList
// }

// const csvFilePath = '/Users/forrestdevs/dev/DATA/SP500/ES_continuous_adjusted_1min.txt'; // Update this path
  // parseCSV(csvFilePath)
  //   .then(d => {
  //     dataList.push(...d);
  //   })
  //   .catch(error => {
  //     console.error('Error parsing CSV file:', error);
  //   });
