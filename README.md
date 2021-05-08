[![Netlify Status](https://api.netlify.com/api/v1/badges/33133b04-5866-4df2-81df-75143a8882e0/deploy-status)](https://app.netlify.com/sites/healthcare-llc/deploys)

# HealthCare-llc

A full-stack project for a theoretical health care company. The goal is to launch a full stack web app that is mobile friendly, a commercial caliber UI for professional use, a user friendly UI for clients/patients. It will also use a multi model database that shares information between models but limits visibility of other infromation. Ultimately, this project should show three things in terms of our ability: creativity, practical/professional application of skills, and our ability to use data in multiple and intricate ways.

## ReadMe Jargon

- PII: Personal Identifiable Information
- Patients 'team': The team of doctors who are assigned to a patient. They are able to add prescriptions and add notes on patients
- Intercompany note: a note that is seen only by admin users and doctors on patients 'team'
- Intercompany note vs Patient note: Intercompany is not seen by patients - this would be a note that might be used to let doctors or admin users that a patient is difficult or rude etc. Patient note is a note that the patient could see - like a summary of a vist

## Goals:

### Front End

- Use react.js for front end
- Use predominately custom CSS for styling
- Pages needed:
  - Home
  - Sign up
  - Patient portal
    - Subpages or components (depends on design):
      - Book/Modify appointment
      - See previous appointments
      - Active and past prescriptions
      - Doctors notes (for patients)
  - Doctor portal
    - Subpages or components (depends on design):
    - Add prescription
    - Add patient note
    - Add intercompany use note
    - Add other doctor to patients 'team'
  - Insurer portal
    - View cost breakdown chart
  - Admin portal
    - Check patient in
    - Modify patient vist
    - Add patient note
    - Add intercompany note

### Databse/Back End:

- Use have a multi use and multi model database:
  - Patient use:
    - For login/log out
    - For booking appointments
    - Seeing previous appointments
    - Doctors notes
    - Prescriptions
  - Doctor use:
    - For login/log out
    - Seeing a patients previous notes
      - Only if doctor is on a patients 'team'
    - Prescribing medication
    - Writing notes on patients visits
    - An intercompany note system that conceals patients PII
      - This would be used for new doctors being added to patients team
- Insurer use:
- Login/log out
- See # of patients who visited
- See total costs accrued by insureds
  - Prescription
  - Procedures
  - Visits
    - Cannot see patients PII
- Admin use:
  - Login/log out
  - Add notes for patients
  - Edit patients appointments
