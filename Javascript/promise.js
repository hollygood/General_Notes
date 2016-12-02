//Promise

//A promise represents the eventual result of an asynchronous operation.
//Every async function you write will return a promise, and
//every thing you await will ordinarily be a promise.


/*
* Promisey pyramid of doom
*/

//Bad

remotedb.allDocs({
    include_docs: true,
    attachments: true
}).then(function (result) {
    var docs = result.rows;
    docs.forEach(function(element) {
        localdb.put(element.doc).then(function(response) {
            alert("Pulled doc with id " + element.doc._id + " and added to local db.");
        }).catch(function (err) {
            if (err.name == 'conflict') {
                localdb.get(element.doc._id).then(function (resp) {
                    localdb.remove(resp._id, resp._rev).then(function (resp) {

                    }

//Modify

remotedb.allDocs(...).then(function (resultOfAllDocs) {
    return localdb.put(...);
}).then(function (resultOfPut) {
    return localdb.get(...);
}).then(function (resultOfGet) {
    return localdb.put(...);
}).catch(function (err) {
    console.log(err);
});

/*
 * forEach() with Promise
 */

//Bad:db.remove() to be called on all the documents.
//In fact, it isn't waiting on anything, and can execute when any number of docs have been removed!

db.allDocs({include_docs: true}).then(function (result) {
    result.rows.forEach(function (row) {
        db.remove(row.doc);
    });
}).then(function () {
    // I naively believe all docs have been removed() now!
});

//Modify: using Promise.all()
// Promise.all() takes an array of promises as input, and then it gives you another promise that only resolves when
// every one of those other promises has resolved. It is the asynchronous equivalent of a for-loop.

db.allDocs({include_docs: true}).then(function (result) {
    return Promise.all(result.rows.map(function (row) {
        return db.remove(row.doc);
    }));
}).then(function (arrayOfResults) {
    // All docs have really been removed() now!
});

