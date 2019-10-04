module.exports.function = function searchDisease (inputPart, inputSymptom) {
  const fakeData = require("./data/FakeData.js");
  const console = require("console");
  console.log("###searchDisease()");
  let results = [];
  
  console.log("inputPart : " + inputPart);
  console.log("inputSymptom : " + inputSymptom);
  if(inputPart == null && inputSymptom == null){
    
  }else{
    if(inputPart != null){
      for(let i = 0; i<fakeData.length; i++){
      let tempData = fakeData[i];
      if(fakeData[i].part.includes(inputPart)){
        results.push(fakeData[i]);
      }
    }
  }
    if(inputSymptom != null){
      for(let i = 0; i<fakeData.length; i++){
       let tempData = fakeData[i];
       if(fakeData[i].symptom.includes(inputSymptom)){
        results.push(fakeData[i]);
      }
      }
    }
  }
  console.log(results);
  console.log("###searchDisease() end...");
  return results;
}
