#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; //gettting the resolution

float createRect(vec2 position, vec2 scale) {
  scale = vec2(0.5) - scale * 0.5; // adjusting the shape position start from ceneter
  vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y)); // creating an shape but it will an l shapeed
  //start from the postion and and at the corner
  shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y)); // these help to create an actual shape
  return shaper.x * shaper.y; // changing these change the size and the color opacity respectively
}

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);
  vec2 scale = vec2(0.6, 0.5);
  float rectangle = createRect(position, scale);

  color = vec3(rectangle);
  gl_FragColor = vec4(color, 1.0);
}
