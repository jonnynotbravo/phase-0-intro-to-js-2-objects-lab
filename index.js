const employee = {

    name : 'Jonny', 
    streetAddress : '12 Broadway'


}

function updateEmployeeWithKeyAndValue(obj, key, value){

    return {...obj, [key] : value};

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){

    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key){

    return {...obj[key]};

}

function destructivelyDeleteFromEmployeeByKey(obj, key){

    delete obj[key];

    return obj;
    


}

