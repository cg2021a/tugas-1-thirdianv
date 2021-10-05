function main() {
  // Access the canvas through DOM: Document Object Model
  var canvas = document.getElementById("myCanvas"); // The paper
  var gl = canvas.getContext("webgl"); // The brush and the paints

  // Define vertices data for three points
  /**
   * A (-0.5, -0.5), Red   (1.0, 0.0, 0.0)
   * B ( 0.5, -0.5), Green (0.0, 1.0, 0.0)
   * C (-0.5,  0.5), Blue  (0.0, 0.0, 1.0)
   * D ( 0.5,  0.5), White (1.0, 1.0, 1.0)
   */
  var vertices0 = [
    function main() {
      // Access the canvas through DOM: Document Object Model
      var canvas = document.getElementById("myCanvas"); // The paper
      var gl = canvas.getContext("webgl"); // The brush and the paints

      // Define vertices data for three points
      /**
       * A (-0.5, -0.5), Red   (1.0, 0.0, 0.0)
       * B ( 0.5, -0.5), Green (0.0, 1.0, 0.0)
       * C (-0.5,  0.5), Blue  (0.0, 0.0, 1.0)
       * D ( 0.5,  0.5), White (1.0, 1.0, 1.0)
       */
      var vertices0 = [
        // BAGIAN SISI KANAN
        -0.385, 0.8, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.47, 0.79, 1, 1, 1,

        -0.33, -0.32, 1, 1, 1, -0.47, 0.79, 1, 1, 1, -0.175, -0.31, 1, 1, 1,

        //BAGIAN F1-F12
        -0.748, 0.75, 0.71, 0.71, 0.71, -0.85, -0.33, 0.71, 0.71, 0.71, -0.73, 0.752, 0.71, 0.71, 0.71,

        -0.85, -0.33, 0.71, 0.71, 0.71, -0.82, -0.325, 0.71, 0.71, 0.71, -0.73, 0.752, 0.71, 0.71, 0.71,

        //TENGAH
        -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.72, 0.75, 0.71, 0.71, 0.71,

        -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.33, -0.32, 0.71, 0.71, 0.71,

        //SISI ATAS
        -0.385, 0.8, 1, 1, 1, -0.42, 0.82, 1, 1, 1, -0.78, 0.74, 1, 1, 1,

        -0.78, 0.74, 1, 1, 1, -0.42, 0.82, 1, 1, 1, -0.77, 0.765, 1, 1, 1,

        // BAGIAN SISI KIRI
        -0.745, 0.75, 1, 1, 1, -0.78, 0.74, 1, 1, 1, -0.92, -0.35, 1, 1, 1,

        -0.92, -0.33, 1, 1, 1, -0.851, -0.35, 1, 1, 1, -0.745, 0.75, 1, 1, 1,

        // BAGIAN SISI BAWAH
        -0.92, -0.33, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.927, -0.44, 1, 1, 1,

        -0.927, -0.44, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.15, -0.41, 1, 1, 1,

        //BAGIAN SISI KECIL
        -0.82, -0.34, 1, 1, 1, -0.8, -0.34, 1, 1, 1, -0.72, 0.76, 1, 1, 1,

        -0.82, -0.325, 1, 1, 1, -0.73, 0.752, 1, 1, 1, -0.72, 0.76, 1, 1, 1,
      ];

      var vertices1 = [
        // BAGIAN SISI KANAN
        -0.385, 0.8, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.47, 0.79, 1, 1, 1,

        -0.33, -0.32, 1, 1, 1, -0.47, 0.79, 1, 1, 1, -0.175, -0.31, 1, 1, 1,

        //BAGIAN F1-F12
        -0.748, 0.75, 0.71, 0.71, 0.71, -0.85, -0.33, 0.71, 0.71, 0.71, -0.73, 0.752, 0.71, 0.71, 0.71,

        -0.85, -0.33, 0.71, 0.71, 0.71, -0.82, -0.325, 0.71, 0.71, 0.71, -0.73, 0.752, 0.71, 0.71, 0.71,

        //TENGAH
        -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.72, 0.75, 0.71, 0.71, 0.71,

        -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.33, -0.32, 0.71, 0.71, 0.71,

        //SISI ATAS
        -0.385, 0.8, 1, 1, 1, -0.42, 0.82, 1, 1, 1, -0.78, 0.74, 1, 1, 1,

        -0.78, 0.74, 1, 1, 1, -0.42, 0.82, 1, 1, 1, -0.77, 0.765, 1, 1, 1,

        // BAGIAN SISI KIRI
        -0.745, 0.75, 1, 1, 1, -0.78, 0.74, 1, 1, 1, -0.92, -0.35, 1, 1, 1,

        -0.92, -0.33, 1, 1, 1, -0.851, -0.35, 1, 1, 1, -0.745, 0.75, 1, 1, 1,

        // BAGIAN SISI BAWAH
        -0.92, -0.33, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.927, -0.44, 1, 1, 1,

        -0.927, -0.44, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.15, -0.41, 1, 1, 1,

        //BAGIAN SISI KECIL
        -0.82, -0.34, 1, 1, 1, -0.8, -0.34, 1, 1, 1, -0.72, 0.76, 1, 1, 1,

        -0.82, -0.325, 1, 1, 1, -0.73, 0.752, 1, 1, 1, -0.72, 0.76, 1, 1, 1,
      ];

      var vertices = [...vertices0, ...vertices1];

      // Create a linked-list for storing the vertices data
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;

      var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

      // Create .c in GPU
      var vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vertexShaderSource);
      var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, fragmentShaderSource);

      // Compile .c into .o
      gl.compileShader(vertexShader);
      gl.compileShader(fragmentShader);

      // Prepare a .exe shell (shader program)
      var shaderProgram = gl.createProgram();

      // Put the two .o files into the shell
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);

      // Link the two .o files, so together they can be a runnable program/context.
      gl.linkProgram(shaderProgram);

      // Start using the context (analogy: start using the paints and the brushes)
      gl.useProgram(shaderProgram);

      // Teach the computer how to collect
      //  the positional values from ARRAY_BUFFER
      //  to each vertex being processed
      var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
      gl.enableVertexAttribArray(aPosition);
      var aColor = gl.getAttribLocation(shaderProgram, "aColor");
      gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray(aColor);

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      var primitive = gl.TRIANGLES;
      var offset = 0;
      gl.drawArrays(primitive, offset, vertices.length / 5);
    },
  ];

  var vertices1 = [
    // BAC
    0.14, -0.06, 0.65, 0.65, 0.65, 0.15, 0.03, 0.65, 0.65, 0.65, 0.24, 0.04, 0.65, 0.65, 0.65,

    // BDC
    0.14, -0.06, 0.65, 0.65, 0.65, 0.25, -0.04, 0.65, 0.65, 0.65, 0.24, 0.04, 0.65, 0.65, 0.65,

    // EBD
    0.15, -0.1, 1, 1, 1, 0.14, -0.06, 1, 1, 1, 0.25, -0.04, 1, 1, 1,

    // EFD
    0.15, -0.1, 1, 1, 1, 0.26, -0.105, 1, 1, 1, 0.25, -0.04, 1, 1, 1,

    // DCI
    0.25, -0.04, 0.5, 0.5, 0.5, 0.24, 0.04, 0.5, 0.5, 0.5, 0.262, 0.065, 0.5, 0.5, 0.5,

    // DHI
    0.25, -0.04, 0.5, 0.5, 0.5, 0.27, -0.035, 0.5, 0.5, 0.5, 0.262, 0.065, 0.5, 0.5, 0.5,

    // FGH
    0.26, -0.105, 1, 1, 1, 0.28, -0.13, 1, 1, 1, 0.27, -0.035, 1, 1, 1,

    // GHK
    0.28, -0.13, 1, 1, 1, 0.27, -0.035, 1, 1, 1, 0.445, -0.045, 1, 1, 1,

    // GLK
    0.28, -0.13, 1, 1, 1, 0.435, -0.115, 1, 1, 1, 0.445, -0.045, 1, 1, 1,

    // HIJ
    0.27, -0.035, 0.5, 0.5, 0.5, 0.262, 0.065, 0.5, 0.5, 0.5, 0.41, 0.075, 0.5, 0.5, 0.5,

    // HKJ
    0.27, -0.035, 0.5, 0.5, 0.5, 0.445, -0.045, 0.5, 0.5, 0.5, 0.41, 0.075, 0.5, 0.5, 0.5,

    // DHF
    0.25, -0.04, 0.5, 0.5, 0.5, 0.27, -0.035, 0.5, 0.5, 0.5, 0.26, -0.105, 0.7, 0.7, 0.7,

    // KAKI
    0.145, 0.011, 1, 1, 1, 0.05, -0.015, 1, 1, 1, 0.143, -0.011, 1, 1, 1,

    0.145, 0.011, 1, 1, 1, 0.05, 0.005, 1, 1, 1, 0.05, -0.015, 1, 1, 1,

    0.141, -0.065, 1, 1, 1, 0.04, -0.065, 1, 1, 1, 0.04, -0.085, 1, 1, 1,

    0.141, -0.065, 1, 1, 1, 0.04, -0.085, 1, 1, 1, 0.141, -0.085, 1, 1, 1,
  ];

  var vertices = [...vertices0, ...vertices1];

  // Create a linked-list for storing the vertices data
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      void main() {
          gl_PointSize = 10.0;
          gl_Position = vec4(aPosition, 0.0, 1.0);
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main() {
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  // Create .c in GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Compile .c into .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Prepare a .exe shell (shader program)
  var shaderProgram = gl.createProgram();

  // Put the two .o files into the shell
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Link the two .o files, so together they can be a runnable program/context.
  gl.linkProgram(shaderProgram);

  // Start using the context (analogy: start using the paints and the brushes)
  gl.useProgram(shaderProgram);

  // Teach the computer how to collect
  //  the positional values from ARRAY_BUFFER
  //  to each vertex being processed
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  gl.drawArrays(primitive, offset, vertices.length / 5);
}
