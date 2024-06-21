describe('My end to end SQL test', function() {


    it('practice fill form ',function(){

        cy.sqlServer("select * ").then(function(result){
            console.log(result[0][1])

        })
    })

})