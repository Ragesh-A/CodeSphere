#ifdef GL_ES  //checks if the gl es macro is defined use meduimp float
precision mediump float; // set the level of precison of float into medium
#endif // end of the if condition

uniform vec2 u_resolution;

//creation of shape cirlce
float createCircle(vec2 position, float radius){
  return step(radius, length(position - vec2(0.5))); // it return value either 0.0 or 1.0 based on the two input
}

void main() {
  gl_FragColor = vec4(1.0, 0.6, 0.9, 1.0); /*setting the fragment color a vector 
  // four color which is rgba*/
  vec3 color = vec3(1.0, 0.0, 0.0); // we can also use this syntax to assign color

  //setting the cordinates
  vec2 position = gl_FragCoord.xy / u_resolution;

  //creating shpe
  float circle = createCircle(position, 0.3);
  color = vec3(circle);
  gl_FragColor = vec4(color, 1.0);
  
}