'use strict'

function gradeLabs () {

    let studentLabs2 = [
    
        {
        student: "Blake",
            myCode: function (num) {
                return Math.pow(num, num);
            },
        },
    
        {
        student: "Jessica",
            runLab: function (num) {
                return Math.pow(num, num);
            },
        },
    
        {
        student: "Mya",
            runLab: function (num) {
                return num * num;
            },
        },
    
        ];
    
        for (let i = 0; i < studentLabs2.length; i++) {
            try {
               throw runLab;
            }  catch (TypeError) {
               throw ('error thrown!');
            }
        }
        return studentLabs2;
    }
    console.log(gradeLabs());