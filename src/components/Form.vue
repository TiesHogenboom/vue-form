<template>
    <div class="container">
        <div class="form-validation"> <!--Form validation-->
            <div class="form1">
                <div class="container-part name"> <!--Computed Properties-->
                    <input placeholder="First Name">
                    <div><!--Conditional Rendering-->
                        <input class="checkbox" type="checkbox">
                        <input placeholder="middlename">
                    </div>
                    <input placeholder="Last Name">
                </div>
                <div class="container-part option"><!--Two way data binding-->
                    <label><input type="radio" value="option1">Option 1</label>
                    <label><input type="radio" value="option2">Option 2</label>
                    <p>Selected option:</p>
                </div>
                <div class="container-part list"><!--Dynamic list-->
                    <option></option>Option
                </div>
                <div class="container-part submit"><!--Data handling-->
                    <button @click="">Submit</button>
                </div>
            </div>
            <div class="form-two">
                <!--Fill form two-->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    width: 75vw;
    height: 50vh;
    margin-left: 12.5vw;
    border: 3px solid black;
    border-top: none;
    padding: 10px;
}

.container-part {
border: 3px solid black;
padding: 10px;
width: 40vw;
margin-bottom: 20px;
}

input {
    border: 3px solid black;
    padding: 10px;
    margin-bottom: 10px;
}

input:focus{
    outline: none;
}

.checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

</style>