

class CrosshairLayer extends BaseLayer {
  constructor(gl: WebGLRenderingContext) {
    super(gl);
    const vsSource = `...`; // Vertex shader for crosshair
    const fsSource = `...`; // Fragment shader for crosshair
    this.initShaderProgram(vsSource, fsSource);
    // Initialize buffers and other setup specific to the crosshair
  }

  render(): void {
    
  }

  // drawCrosshair(gl: WebGLRenderingContext, shaderProgram: , mouseX, mouseY) {

  // }

  // render(mouseX: number, mouseY: number): void {
  //   // Convert mouse coordinates to clip space
  //   const x = mouseX * 2 - 1; // Example conversion, adjust as needed
  //   const y = -mouseY * 2 + 1; // Example conversion, adjust as needed


  //   if (this.program == null || this.gl == null) {
  //     console.error('Shader program not initialized');
  //     return;
  //   }

  //   // Define the vertices for the crosshair lines
  //   const vertices = new Float32Array([
  //     x, 1.0,   // Top
  //     x, -1.0,  // Bottom
  //     -1.0, y,  // Left
  //     1.0, y    // Right
  //   ]);

  //   // Create a buffer and put the vertices in it
  //   const positionBuffer = this.gl.createBuffer();
  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
  //   this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);

  //   // Use the shader program
  //   this.gl.useProgram(this.program);

  //   // Get the attribute location, enable it
  //   const aPosition = this.gl.getAttribLocation(this.program, 'aPosition');
  //   this.gl.enableVertexAttribArray(aPosition);

  //   // Bind the position buffer.
  //   this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

  //   // Tell the attribute how to get data out of positionBuffer
  //   this.gl.vertexAttribPointer(aPosition, 2, this.gl.FLOAT, false, 0, 0);

  //   // Execute the drawing commands
  //   this.gl.drawArrays(this.gl.LINES, 0, 4);
  // }
}

export default CrosshairLayer;