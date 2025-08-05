export default [({
    lang: 'arduinoc',
    template: `//( include //)

//( lib //)

//({
    this.$ALL_VARIABLES.length==0?'':this.$ALL_VARIABLES.map(v=>"float "+v+" = 0;").join('\\n')
}//)

//( declare //)

void _delay(float seconds) {
  long endTime = millis() + seconds * 1000;
  while(millis() < endTime) _loop();
}

//(
void setup() {
  //( setup //)
  //( code //)
}
//)

void _loop() {
  //( _loop //)
}

void loop() {
  //( loop //)
  _loop();
}
// test`,
    splitor: {
        frame: {
            left: "//(",
            right: "//)",
        },
        expression: {
            left: "/*{",
            right: "}*/",
        }
    },
    reducers: [{
        name: 'include',
        reduce: (codes) => {
            let codes1 = []
            for (let code of codes) {
                let codeStr = '';
                if (typeof code === 'string') {
                    codeStr = code;
                } else if (typeof code === 'function') {
                    codeStr = code();
                }
                if (codes1.indexOf(codeStr) === -1) {
                    codes1.push(codeStr);
                }
            }
            if (codes1.length === 0) {
                return undefined;
            }
            return codes1.map(code => {
                return '#include ' + code;
            }).join('\n') + '\n'
        }
    }]
})];