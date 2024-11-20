let formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
window.addEventListener("load", updateForm);


function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}



function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}



function updateForm() {
    formData = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
}
