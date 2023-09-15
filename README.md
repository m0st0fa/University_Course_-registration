Question 1: Add at least 3 Project features
Answer:
(1).Credit Hour Tracking: The Cart component displays the credit hours remaining (creditReaming) and the total credit hours for the selected courses (totalCreditHours), helping users monitor their progress and course load.
(2).Course Display: The Cart component lists the selected courses (SelectedCourse), allowing users to see the courses they've added to their cart and plan their enrollment accordingly.
(3).User-Friendly Interface: The component presents course information in a clear and organized manner, enhancing the user experience by providing important details like credit hours and course names.

Question 2: Discuss how you managed the state in your assignment project?
Answer: In this component, the state is managed through props (SelectedCourse, totalCreditHours, creditReaming, SelectedPrice). The parent component is responsible for passing down these props, and Cart component utilizes them to display the relevant information. This is a common pattern in React where state is managed at a higher level (in the parent component) and passed down to child components as props to maintain a unidirectional flow of data and ensure a predictable rendering of the UI.
