const listData = [
  {
    id: 123,
    name: "sam",
    address: {
      city: "chennai",
      state: "Tamilnadu",
      pincode: 603103,
    },
  },
  {
    id: 124,
    name: "ram",
    address: {
      city: "chennai",
      state: "Tamilnadu",
      pincode: 603103,
    },
  },
  {
    id: 125,
    name: "sree",
    address: {
      city: "dindugal",
      state: "Tamilnadu",
      pincode: 603103,
    },
  },
];

const reduceData=listData.reduce((acc,element)=>{
if(element.address.city==="chennai"){
    const newAddress=element.address.city+element.address.state+element.address.pincode
    acc.push({...element,address:newAddress})
    return acc;
}
else{
    acc.push(element);
    return acc;
}
},[])

console.log(reduceData)
// const filteredData=listData.filter((ele)=>ele.name==="sam");
// console.log(filteredData)
// const transformedData=filteredData.map((ele)=>({...ele,address:ele.address.city+ele.address.state+ele.address.pincode}));
// console.log("transformedData",transformedData);

