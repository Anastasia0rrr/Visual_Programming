"use strict";
function orderBy(Array, Array_Name) {

    const Sorted_Array = [...Array];

    try{
        for (let num in Sorted_Array) {
        const user = Sorted_Array[num];
    
        if (typeof user !== 'object' || user === null) {
            throw new Error("Not an object");
        }
    
        if (!("name" in user) || !("age" in user)) {
            throw new Error("Missing property");
        }
    
      }
    }catch(err){
      throw new Error(err.message);
    }

    Sorted_Array.sort((a, b) => {
        for (const prop of Array_Name) {

          const Object_1 = a[prop];
          const Object_2 = b[prop];
    
          if (Object_1 < Object_2) {
            return -1;
          }
          if (Object_1 > Object_2) {
            return 1;
          }
        }
        return 0;
      });
    
      return Sorted_Array;
    
}

module.exports = orderBy;