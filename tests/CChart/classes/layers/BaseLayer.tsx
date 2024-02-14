abstract class BaseLayer {
    protected gl: WebGLRenderingContext;
    protected program: WebGLProgram | null = null;
  
    constructor(gl: WebGLRenderingContext) {
      this.gl = gl;
    }
  
    protected initShaderProgram(vsSource: string, fsSource: string): void {
      // Implement shader program initialization here (similar to the initShaderProgram method previously discussed)
      // Set this.program to the created program
    }
  
    abstract render(): void; // Each subclass must implement its own rendering logic
  }
  