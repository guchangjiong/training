function pangu () {
  const childrenIn2018 = {
    Kevin: {
      age: 10,
      gender: 'male'
    },

    Carol: {
      age: 8,
      gender: 'female'
    }
  }

  let currentYear = 2018

  return {
    askHerAbout (name, what) {
      // 1
    },

    setYear (year) {
      // 2
    }
  }
}

const mother = pangu()

// 作业：
// 补充上面的 `askHerAbout`, 和 `setYear` 两个方法，
// 使下面的代码执行后，能够得到期望的结果
// 要求：
// 不允许修改两个 function 外面的代码
// 小提示：
// - 打印内容，可以简单用 `console.log`
// - `askHerAbout` 方法可能需要用到 `if`，可以参考最新课件中的 control-flow.js

mother.askHerAbout('Kevin', 'age')  // 打印出 10
mother.askHerAbout('Carol', 'gender')  // 打印出 'female'

mother.setYear(2019)
mother.askHerAbout('Kevin', 'age')  // 打印出 11
