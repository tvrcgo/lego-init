'use strict'

const path = require('path')
const Url = require('url')

const tags = {
  require: {
    compile(compiler, args, content, parents, options, blockName) {
      let output = []
      const urls = args[1]
      urls.forEach(url => {
        const tpl = options.filename
        const absUrl = path.resolve(tpl, '..', url)
          .replace(path.join(process.cwd(), '\\app\\view'), '')
          .replace(/\\+/g, '/')
        output.push( '/public' + absUrl )
      })
      return '; _output += "'+output.join('')+'"; '
    },
    ends: false
  }
}

function parser() {
    var error = (token) => {
        throw new Error('Unexpected token "' + token.match + '" on line ' + line + '.');
    }
    return (content, line, parser, types, stack) => {
        let attr=[], str=[], vars=[]
        let stat=0, kv={}
        parser.on(types.VAR, (token) => {
            switch (stat) {
                case 0:
                case 3:
                    kv.key = token.match;
                    stat = 1;
                    break;
                case 1:
                    vars.push(kv);
                    kv = {};
                    kv.key = token.match;
                    stat = 1;
                    break;
                default:
            }
        })
        parser.on(types.STRING, (token) => {
            token.match = token.match.replace(/['"]+/g, '');
            switch (stat) {
                case 2:
                    kv.val = token.match;
                    stat = 3;
                    attr.push(kv);
                    break;
                case 3:
                case 0:
                    str.push(token.match);
                    stat = 0;
                    break;
                default:
            }
        })
        parser.on(types.ASSIGNMENT, (token) => {
            switch (stat) {
                case 1:
                    stat = 2;
                    break;
                default:
                    error(token);
            }
        })
        parser.on('end', () => {
            switch (stat) {
                case 1:
                    vars.push(kv);
                    break;
                default:

            }
            parser.out.push(attr, str)
        })
        return true
    }
}

module.exports = (swig) => {
  Object.keys(tags).forEach(name => {
      swig.setTag(name, parser(), tags[name].compile, tags[name].ends)
  })
}
