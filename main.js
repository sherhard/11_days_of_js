const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, Gravity, HumanBodyTemp, WaterBoilingTemp]=constants;
console.log(e, pi, Gravity, HumanBodyTemp, WaterBoilingTemp)
// --------------------------------
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [ind , est, sw, den]=countries;
console.log(ind, est, sw, den);

// -------------------------------------------

const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let {width ,height ,area , perimeter}=rectangle;
  console.log(width ,height ,area , perimeter)
//   ----------------------------------------------
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

for (const {name,scores,skills,age}of users){
    console.log(name,scores,skills,age)
}
// ============================================

for (const {skills }of users){
    if(skills.length<=2){
    console.log(skills)
        
    }
}
// -------------------------------------------------

const countriesObj={
    Finlands:{
        city:'Fin',
        people:10,
        laung:'land'
    },
    Estonia:{
        city:'Als',
        people:120,
        laung:'lansd'

    },
    Sweden:{

        city:'Fin',
        people:102,
        laung:'land'
    }

}
    let {Finlands,Estonia,Sweden}=countriesObj;
    console.log(Finlands,Estonia,Sweden)
      
  // =====================================================


  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  let [name ,skills,[jsScore,reactScore ]]=student;
  console.log(name ,skills,jsScore,reactScore)

// ===========================================================

 