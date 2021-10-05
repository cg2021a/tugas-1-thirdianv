function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var leftVertices = [
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

  var rightVertices = [
    // BAGIAN UJUNG KIRI ATAS
    0.22, 0.05, 1, 1, 1, 0.203, 0.06, 1, 1, 1, 0.197, 0.05, 1, 1, 1,

    0.24, 0.0754, 1, 1, 1, 0.22, 0.05, 1, 1, 1, 0.24, 0.05, 1, 1, 1,

    0.203, 0.06, 1, 1, 1, 0.22, 0.05, 1, 1, 1, 0.21, 0.0665, 1, 1, 1,

    0.22, 0.05, 1, 1, 1, 0.21, 0.0665, 1, 1, 1, 0.218, 0.0705, 1, 1, 1,

    0.22, 0.05, 1, 1, 1, 0.23, 0.074, 1, 1, 1, 0.24, 0.0754, 1, 1, 1,

    0.22, 0.05, 1, 1, 1, 0.218, 0.0705, 1, 1, 1, 0.23, 0.074, 1, 1, 1,

    // BAGIAN SISI KIRI
    0.22, 0.05, 1, 1, 1, 0.197, 0.05, 1, 1, 1, 0.139, -0.08, 1, 1, 1,

    0.139, -0.08, 1, 1, 1, 0.172, -0.08, 1, 1, 1, 0.22, 0.05, 1, 1, 1,

    //BAGIAN UJUNG KIRI BAWAH
    0.172, -0.08, 1, 1, 1, 0.139, -0.08, 1, 1, 1, 0.136, -0.09, 1, 1, 1,

    0.172, -0.08, 1, 1, 1, 0.136, -0.09, 1, 1, 1, 0.1362, -0.098, 1, 1, 1,

    0.172, -0.08, 1, 1, 1, 0.15, -0.108, 1, 1, 1, 0.1362, -0.098, 1, 1, 1,

    0.172, -0.08, 1, 1, 1, 0.15, -0.108, 1, 1, 1, 0.172, -0.108, 1, 1, 1,

    //SISI BAWAH

    0.172, -0.08, 1, 1, 1, 0.172, -0.108, 1, 1, 1, 0.845, -0.066, 1, 1, 1,

    0.845, -0.066, 1, 1, 1, 0.845, -0.09, 1, 1, 1, 0.172, -0.09, 1, 1, 1,

    //SISI ATAS
    0.24, 0.0754, 1, 1, 1, 0.24, 0.05, 1, 1, 1, 0.77, 0.055, 1, 1, 1,

    0.77, 0.055, 1, 1, 1, 0.77, 0.076, 1, 1, 1, 0.24, 0.0754, 1, 1, 1,

    //SISI KANAN
    0.798, 0.055, 1, 1, 1, 0.845, -0.066, 1, 1, 1, 0.875, -0.066, 1, 1, 1,

    0.798, 0.055, 1, 1, 1, 0.845, -0.066, 1, 1, 1, 0.78, 0.055, 1, 1, 1,

    //UJUNG KANAN ATAS
    0.77, 0.055, 1, 1, 1, 0.78, 0.071, 1, 1, 1, 0.795, 0.06, 1, 1, 1,

    0.77, 0.055, 1, 1, 1, 0.795, 0.06, 1, 1, 1, 0.798, 0.055, 1, 1, 1,

    0.77, 0.055, 1, 1, 1, 0.77, 0.076, 1, 1, 1, 0.78, 0.071, 1, 1, 1,

    //UJUNG KANAN ATAS
    0.845, -0.066, 1, 1, 1, 0.875, -0.066, 1, 1, 1, 0.8785, -0.0825, 1, 1, 1,

    0.845, -0.066, 1, 1, 1, 0.8785, -0.0825, 1, 1, 1, 0.868, -0.088, 1, 1, 1,

    0.845, -0.066, 1, 1, 1, 0.868, -0.088, 1, 1, 1, 0.845, -0.09, 1, 1, 1,

    // //BAGIAN F1-F12
    // 0.17, -0.08, 1, 1, 1, 0.863, -0.063, 1, 1, 1, 0.86, -0.061, 1, 1, 1, 0.18, -0.065, 1, 1, 1,

    // -0.85, -0.33, 0.71, 0.71, 0.71, -0.82, -0.325, 0.71, 0.71, 0.71, -0.73, 0.752, 0.71, 0.71, 0.71,

    // //TENGAH
    // -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.72, 0.75, 0.71, 0.71, 0.71,

    // -0.47, 0.795, 0.71, 0.71, 0.71, -0.8, -0.33, 0.71, 0.71, 0.71, -0.33, -0.32, 0.71, 0.71, 0.71,

    // // UJUNG KANAN BAWAH
    // -0.92, -0.33, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.927, -0.44, 1, 1, 1,

    // -0.927, -0.44, 1, 1, 1, -0.175, -0.31, 1, 1, 1, -0.15, -0.41, 1, 1, 1,

    // //BAGIAN SISI KECIL
    // -0.82, -0.34, 1, 1, 1, -0.8, -0.34, 1, 1, 1, -0.72, 0.76, 1, 1, 1,

    // -0.82, -0.325, 1, 1, 1, -0.73, 0.752, 1, 1, 1, -0.72, 0.76, 1, 1, 1,
  ];

  var vertices = [...leftVertices, ...rightVertices];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying  vec3 vColor;
      uniform mat4 uTranslate;
      void main(){
          gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0); // Center of the coordinate
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main(){
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);

  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);

  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  var speed = 0.0211;
  var dy = 0;

  const uTranslate = gl.getUniformLocation(shaderProgram, "uTranslate");

  function render() {
    if (dy >= 0.9 || dy <= -0.85) speed = -speed;
    dy += speed;

    const rightPosition = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0, dy, 0.0, 1.0];

    const leftPosition = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0, 0.0, 0.0, 1.0];

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniformMatrix4fv(uTranslate, false, leftPosition);
    gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length / 5);

    gl.uniformMatrix4fv(uTranslate, false, rightPosition);
    gl.drawArrays(gl.TRIANGLES, leftVertices.length / 5, rightVertices.length / 5);

    requestAnimationFrame(render);
  }
  render();
}
