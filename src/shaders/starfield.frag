
uniform float time;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 color = vec3(1.0, 1.0, 1.0) * sin(time + length(vUv - 0.5) * 10.0);
  gl_FragColor = vec4(color, 1.0);
}
    