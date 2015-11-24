

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform sampler2D u_tex1;
uniform vec2 u_tex1Resolution;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main () {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    vec2 offset = vec2(0.0);

    vec2 pos = st-.5;
    float dist = dot(pos,pos);
    offset += dist*.5;
    offset.x = texture2D(u_tex1,st).r*0.02;
    vec4 color = vec4(1.);
    color.r = texture2D(u_tex0,st+offset).r;
    color.g = texture2D(u_tex0,st+pow(offset,vec2(4.))).g;
    color.b = texture2D(u_tex0,st+pow(offset,vec2(5.))).b;

    gl_FragColor = color;
}