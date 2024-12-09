# GEN CSS AI

# Table of Contents
- [GEN CSS AI](#gen-css-ai)
- [Table of Contents](#table-of-contents)
  - [What is GEN CSS?](#what-is-gen-css)
  - [Technologies Used](#technologies-used)
  - [How Does It Work?](#how-does-it-work)
    - [Step 1: Input HTML Structure](#step-1-input-html-structure)
    - [Step 2: Provide Design Description](#step-2-provide-design-description)
    - [Step 3: Process Input](#step-3-process-input)
    - [Step 4: CSS Code Generation](#step-4-css-code-generation)
    - [Step 5: Output CSS](#step-5-output-css)
    - [Step 6: Live Preview (Optional)](#step-6-live-preview-optional)
    - [Step 7: User Edits (Optional)](#step-7-user-edits-optional)
    - [Step 8: Final Use](#step-8-final-use)
  - [Why Is It Needed?](#why-is-it-needed)
  - [Folder Structuer](#folder-structuer)
  - [How to run](#how-to-run)
  - [Team](#team)
  - [Demo](#demo)
    - [Live Demo](#live-demo)
    - [Video Demo](#video-demo)





## What is GEN CSS?
GEN CSS refers to "Generated CSS", which is a process or tool that automatically creates CSS (Cascading Style Sheets) code based on certain inputs or requirements, such as HTML structure, design preferences, and descriptions. It helps developers quickly generate custom styles for web pages without having to manually write every CSS rule.





## Technologies Used
- **Frontend**: React.js for building the user interface.
- **APIs**: Integration with llama3-8b-8192 through GROQ API for generating CSS code 




## How Does It Work?


### Step 1: Input HTML Structure
- The user provides the **HTML code** they want to style. This HTML structure can range from simple to complex, such as a basic webpage with headers, buttons, and containers.

### Step 2: Provide Design Description
- The user gives a **design description** with the following preferences:
  - **Color themes** (e.g., dark mode or light mode)
  - **Layout preferences** (e.g., flexbox, grid)
  - **Typography** (font size, family, weight)
  - **Spacing and margins** (padding, borders)
  - **Responsiveness** (how it should behave on mobile/tablet)

### Step 3: Process Input
- The **AI or tool** processes the HTML and description. 
- If using AI models (such as Groq or GPT-based models), the system will generate CSS that matches the layout and design instructions provided.

### Step 4: CSS Code Generation
- The system generates the **CSS code** based on the HTML structure and the design description.
- The generated CSS should be **optimized**, following best practices like responsiveness and clean styling.

### Step 5: Output CSS
- The tool outputs the **generated CSS**, which is ready for use in a project.
- This CSS should fulfill all the design requirements specified by the user.

### Step 6: Live Preview (Optional)
- Some systems offer a **live preview** of the HTML with the generated CSS, allowing users to see how the design looks before finalizing it.

### Step 7: User Edits (Optional)
- The user may choose to **edit the CSS** further after receiving the generated code to meet additional customization needs.

### Step 8: Final Use
- Finally, the generated CSS is ready for use in the project.




## Why Is It Needed?

GEN CSS is needed because it significantly improves the efficiency and speed of web development. It automates the process of writing CSS, saving time and effort, especially for complex layouts or large projects. By generating consistent, optimized, and error-free CSS code, it ensures a uniform design and reduces the chances of mistakes. Additionally, GEN CSS tools often create responsive designs by default, making websites adaptable to various screen sizes without extra manual work. This process also boosts productivity, enabling developers to focus on functionality and user experience, while minimizing the effort required to create clean and performant styles.



## Folder Structuer


```

├───public
└───src
    ├───Assets
    ├───Components
    │   ├───Cards
    │   ├───Editor
    │   ├───Footer
    │   ├───Header
    │   ├───Preview
    │   └───Screen Loader
    ├───Pages
    │   └───Frontend
    └───SCSS
        └───Components
            └───Pages

```


## How to run 

Follow these steps to Run the app

1. Clone the repo by running this command in your system

    ```
    git clone https://github.com/iammar99/GEN_CSS.git
    ```
2. Open terminal and run this command to install dependencies 

    ```
    npm install
    ```
3. Run this command to run the app on local server
    ```
    npm start
    ```




## Team

<h1 align="center">GenX Innovators</h1>


<table align="center">
    <tbody>
        <tr>
            <td align="center">
                <a href="https://github.com/iammar99">
                    <img src="https://avatars.githubusercontent.com/iammar99" width="100px" style="border-radius:50%;" alt="Ammar"/>
                    <br />
                    <sub><b>Ammar</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/sheikhawais7">
                    <img src="https://avatars.githubusercontent.com/sheikhawais7" width="100px" style="border-radius:50%;" alt="sheikhawais7"/>
                    <br />
                    <sub><b>Muhammad Awais Mehboob</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/wahawahaabbabb">
                    <img src="https://avatars.githubusercontent.com/wahaabb" width="100px" style="border-radius:50%;" alt="Abdul Wahab"/>
                    <br />
                    <sub><b>Abdul Wahab</b></sub>
                </a> 
            </td>
        </tr> 
    </tbody>
</table>




## Demo 

### Live Demo

[GEN CSS](https://gen-css.vercel.app/)

### Video Demo

[View my video](/src/Assets/WhatsApp%20Video%202024-12-09%20at%2015.21.40_c01d4a52.mp4)




