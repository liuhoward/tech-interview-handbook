(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(6),i=(a(0),a(145)),o={id:"string",title:"String"},s={id:"algorithms/string",title:"String",description:"## Tips",source:"@site/../contents/algorithms/string.md",permalink:"/tech-interview-handbook/algorithms/string",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/string.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Stack",permalink:"/tech-interview-handbook/algorithms/stack"},next:{title:"Tree",permalink:"/tech-interview-handbook/algorithms/tree"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Strings are sequences",id:"strings-are-sequences",children:[]},{value:"Common question topics",id:"common-question-topics",children:[{value:"Non-repeating Characters",id:"non-repeating-characters",children:[]},{value:"Anagram",id:"anagram",children:[]},{value:"Palindrome",id:"palindrome",children:[]}]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("p",null,"Ask about input character set and case sensitivity. Usually the characters are limited to lowercase Latin characters, for example a to z."),Object(i.b)("p",null,"When you need to compare strings where the order isn\u2019t important (like anagram), you may consider using a HashMap as a counter. If your language has a built-in Counter class like Python, ask to use that instead."),Object(i.b)("p",null,"If you need to keep a counter of characters, a common mistake is to say that the space complexity required for the counter is O(n). The space required for a counter is O(1) not O(n). This is because the upper bound is the range of characters, which is usually a fixed constant of 26. The input set is just lowercase Latin characters."),Object(i.b)("p",null,"Common data structures for looking up strings efficiently are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Trie"}),"Trie/Prefix Tree")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Suffix_tree"}),"Suffix Tree"))),Object(i.b)("p",null,"Common string algorithms are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"}),"Rabin Karp")," for efficient searching of substring using a rolling hash"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm"}),"KMP")," for efficient searching of substring")),Object(i.b)("h2",{id:"strings-are-sequences"},"Strings are sequences"),Object(i.b)("p",null,"A string is a sequence of characters. Many tips that apply to arrays also apply to strings."),Object(i.b)("p",null,"Are there duplicate characters in the string, would it affect the answer?"),Object(i.b)("p",null,"When using an index to iterate through characters, be careful not to go out of bounds."),Object(i.b)("p",null,"Be mindful about slicing or concatenating strings in your code. Typically, slicing and concatenating strings require O(n) time. Use start and end indices to demarcate a substring where possible."),Object(i.b)("p",null,"Sometimes you can traverse the string from the right rather than from the left."),Object(i.b)("p",null,"Master the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems"}),"sliding window technique")," that applies to many substring problems."),Object(i.b)("p",null,"When you are given two strings to process, it is common to have one index per string (pointer) to traverse/compare the both of them. For example, we use the same approach to merge two sorted arrays."),Object(i.b)("h2",{id:"common-question-topics"},"Common question topics"),Object(i.b)("p",null,"Many string questions fall into one of these buckets."),Object(i.b)("h3",{id:"non-repeating-characters"},"Non-repeating Characters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use a 26-bit bitmask to indicate which lower case latin characters are inside the string.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"mask = 0\nfor c in set(word):\n  mask |= (1 << (ord(c) - ord('a')))\n")),Object(i.b)("p",null,"To determine if two strings have common characters, perform & on the two bitmasks. If the result is non-zero, ",Object(i.b)("inlineCode",{parentName:"p"},"mask_a & mask_b > 0"),", then the two strings have common characters."),Object(i.b)("h3",{id:"anagram"},"Anagram"),Object(i.b)("p",null,"An anagram is word switch or word play. It is the result of re-arranging the letters of a word or phrase to produce a new word or phrase, while using all the original letters only once. In interviews, usually we are only bothered with words without spaces in them."),Object(i.b)("p",null,"To determine if two strings are anagrams, there are a few plausible approaches:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sorting both strings should produce the same resulting string. This takes O(nlgn) time and O(lgn) space."),Object(i.b)("li",{parentName:"ul"},"If we map each character to a prime number and we multiply each mapped number together, anagrams should have the same multiple (prime factor decomposition). This takes O(n) time and O(1) space."),Object(i.b)("li",{parentName:"ul"},"Frequency counting of characters will help to determine if two strings are anagrams. This also takes O(n) time and O(1) space.")),Object(i.b)("h3",{id:"palindrome"},"Palindrome"),Object(i.b)("p",null,"A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as ",Object(i.b)("em",{parentName:"p"},"madam")," or ",Object(i.b)("em",{parentName:"p"},"racecar"),"."),Object(i.b)("p",null,"Here are ways to determine if a string is a palindrome:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reverse the string and it should be equal to itself."),Object(i.b)("li",{parentName:"ul"},"Have two pointers at the start and end of the string. Move the pointers inward till they meet. At any point in time, the characters at both pointers should match.")),Object(i.b)("p",null,"The order of characters within the string matters, so HashMaps are usually not helpful."),Object(i.b)("p",null,"When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle. Note that palindromes can be even or odd length. For each middle pivot position, you need to check it twice: Once that includes the character and once without the character."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For substrings, you can terminate early once there is no match."),Object(i.b)("li",{parentName:"ul"},"For subsequences, use dynamic programming as there are overlapping subproblems. Check out ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/longest-palindromic-subsequence/"}),"this question"),".")),Object(i.b)("h2",{id:"corner-cases"},"Corner cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Empty string"),Object(i.b)("li",{parentName:"ul"},"String with 1 or 2 characters"),Object(i.b)("li",{parentName:"ul"},"String with repeated characters"),Object(i.b)("li",{parentName:"ul"},"Strings with only one distinct character")),Object(i.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"}),"Longest Substring Without Repeating Characters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/longest-repeating-character-replacement/"}),"Longest Repeating Character Replacement")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/minimum-window-substring/description/"}),"Minimum Window Substring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/valid-anagram"}),"Valid Anagram")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/group-anagrams/"}),"Group Anagrams")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/valid-parentheses"}),"Valid Parentheses")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/valid-palindrome/"}),"Valid Palindrome")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/longest-palindromic-substring/"}),"Longest Palindromic Substring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/palindromic-substrings/"}),"Palindromic Substrings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/encode-and-decode-strings/"}),"Encode and Decode Strings (LeetCode Premium)"))))}b.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r),i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),b=o(a),p=r,m=b[s+"."+p]||b[p]||c[p]||i;return a?n.a.createElement(m,Object.assign({},{ref:t},l,{components:a})):n.a.createElement(m,Object.assign({},{ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);