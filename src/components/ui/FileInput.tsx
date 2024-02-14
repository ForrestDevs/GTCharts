// components/FileInput.tsx

import React, { useState } from 'react';

interface FileInputProps {
  onContentRead: (content: string) => void; // Callback prop for passing content to parent
}

const FileInput: React.FC<FileInputProps> = ({ onContentRead }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileRead = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          // Call the callback function with the file content
          onContentRead(content);
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileRead} disabled={!selectedFile}>
        Read File
      </button>
    </div>
  );
};

export default FileInput;
