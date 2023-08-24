A shader as two parts, vertex shader and fragment shader.

Each part must contain `main` function, may may not return a value

## uniform 

uniform is a keyword used to declare variables that are meant to be outside the shader, typically from the application code the rendering pipeline. these are used to pass the values such as constants, textures, matrices etc.

some build in method
`u_resolution ` to get the resolution of canvas that we are going to draw
`u_time` system time
`u_mouse` x and y of mouse

```glsl
uniform vec2 

```