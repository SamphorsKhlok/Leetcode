var assert = require('assert');
var isValid=  require("./ValidParentheses");

describe('is Valid', function() {
    var tests = [
        {args: '{[()]}',       expected: true},
        {args: '{[(])}',       expected: false},
        {args: '{{[[(())]]}}',       expected: true},
        {args: '{()[][{}]}',       expected: true},
        {args: '({}{[]})({)}',       expected: false},
        {args: '()[]',       expected: true},
        {args: '[()][{}]{[({})[]]}',       expected: true},
        {args: '((){)}',       expected: false},
        {args: '}({}){',       expected: false},
        {args: '){[]()})}}]{}[}}})}{]{](]](()][{))])(}]}))(}[}{{)}{[[}[]',       expected: false},
        {args: '()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}',       expected: true},
        {args: '{][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))[',       expected: false},
        {args: '[)](][[([]))[)',       expected: false},
        {args: ']}]){[{{){',       expected: false},
        {args: '{[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){[',       expected: false},
        {args: '[(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}',       expected: false},
        {args: '()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]',       expected: true},
        {args: '({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[[',       expected: false},
        {args: ')}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{',       expected: false},
        {args: '}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}',       expected: false},

        {args: '()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})',       expected: false},
        {args: '){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{',       expected: false},
        {args: '[(})])}{}}]{({[]]]))]})]',       expected: false},
        {args: '[{',       expected: false},
        {args: '}}',       expected: false},

    ];

    tests.forEach(function(test) {
        it('result ', function() {
            var res = isValid(test.args);
            assert.equal(res, test.expected);
        });
    });
});
