import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)


        // }, (req, res, next) => {
        // res.send('GET` request successful!')
        // })


        //Post endpoint
        .post(addNewContact);
        // .post((req, res) => 
        // res.send('POST request successful!'));


    app.route('/contact/:contactID')
    //get a specific contact
        .get(getContactWithID)
        
        //updating a specific contact
        .put(updateContact)
        // .put((req, res) => 
        // res.send('PUT request successful!'))

        //delete a specific contact
        .delete(deleteContact)
        // .delete((req, res) => 
        // res.send('DELETE request successful!'))


}

export default routes;