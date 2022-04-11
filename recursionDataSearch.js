var dan = {
  type: "person",
  data: {
        gender: "male",
        info: {
            id: 100,
            fullname: {
                      first: "ashok",
                      last: "yemula",
            }
        }
  }
}
let test1 = 10;
console.log(test1);
const deepPick = (fields, index, object={}) => {
                  index = index + 1;
                  const [first, ...remaining] = fields.split(".");
                   console.log(object[first]);
                 //  console.log(index);
                  // console.log(first);
                  return (remaining.length) ?
                        deepPick(remaining.join("."), index, object[first]) : object[first];
};

deepPick("data.info.fullname.last", 0, dan);
