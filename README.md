# CA3Week

Frontend:

Before starting the frontend application one must open a terminal window and navigate to the CA3Frontend folder and write these 7 lines:

npm install
npm install react-bootstrap-table-next
npm install bootstrap@4.0.0
npm install react-bootstrap-table2-filter
npm install react-bootstrap-table2-paginator
npm install dk_test_names
npm install json-server Note: this line is only necessary if you do not already have Json-server installed on your system.

Once this is done, it is necessary to enter apiFacade.js and ensure that the URL matches the URL your system has assigned to your backend. 
If your backend is located at https://localhost:8084/jwtbackend then this will not be necessary.

Backend:

The backend is hosted at a droplet with URL: <URL>

It contains a MySQL database with a few preset usernames and the necessary POJOs to authenticate logins through the Frontend.

App:

