import * as React from "react";
import Stack from "@mui/material/Stack";
import "../App.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function Forms() {
  const [Name, setName] = React.useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Gender: "",
    course: "SELECT THE COURSE",
  });
  const [Errors, setErrors] = React.useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Gender: "",
  });
  const [Required, setRequired] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent  default behaviour of the form
    var errorkeys = Object.keys(Name).filter((key) => {
      // console.log(errorkeys)
      // var err = Object.keys(formData).filter((i) => {
      if (Name[key] === "" && key !== "h") {
        return key;
      }
      return 0;
    });
    if (errorkeys.length >= 1) {
      setRequired("*FILL THE DATA*");
    } else {
      console.log(Name);
    }
  };
  const handleReset = () => {
    setName({
      Firstname: "",
      Lastname: "",
      Email: "",
      Gender: "",
      course: "SELECT THE COURSE",
      
    });
    setRequired("");
    setErrors({ Firstname: "",
    Lastname: "",
    Email: "",
    Gender: "",})
  };
  var handleChange = (event) => {
    if (event.target.value === "") {
      setErrors({
        ...Errors,
        [event.target.name]: `${event.target.name} is required*`,
      });
    } else {
      setErrors({ ...Errors, [event.target.name]: "" });
      setRequired("");
    }
    // console.log(Errors)
    setName({ ...Name, [event.target.name]: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
             <Typography variant="h3" component="div" gutterBottom>
        CONTROLLED FORM
      </Typography>

        <div>
          <label>First Name:</label>
          <input
          className="inputtype1"
            type="text "
            // required
            name="Firstname"
            value={Name.Firstname}
            onChange={(event) => {
              handleChange(event);
            }}
          ></input>
        </div>
        <sub style={{ color: "red" }}>{Errors.Firstname}</sub>
        <br /> <br />
        <div>
          <label>Last Name:</label>
          <input
          className="inputtype1"
            type="text"
            name="Lastname"
            // required
            value={Name.Lastname}
            onChange={(event) => {
              handleChange(event);
            }}
          ></input>
          <div>
            <sub style={{ color: "red" }}>{Errors.Lastname}</sub>
          </div>
        </div>
        <br /> <br />
        <div>
          <label>Email:</label>
          <input
          className="inputtype2"
            type="text"
            name="Email"
            // required
            value={Name.Email}
            onChange={(event) => {
              handleChange(event);
            }}
          ></input>
          <div>
            <sub style={{ color: "red" }}>{Errors.Email}</sub>
          </div>
        </div>
        <br /> <br />
        <div>
          <label required>Gender:</label>
          <input
            type="radio"
            name="Gender"
            value="male"
            onChange={(event) => {
              handleChange(event);
            }}
          ></input>
          Male
          <input
            type="radio"
            // required
            name="Gender"
            value="female"
            onChange={(event) => {
              handleChange(event);
            }}
          ></input>
          Female
        </div>
        <sub style={{ color: "red" }}>{Errors.Gender}</sub>
        <br /> <br />
        <div>
          Course:{" "}
          <select
          className="inputtype3"
            name="course"
            value={Name.course}
            onChange={(event) => {
              handleChange(event);
            }}
          >
            <option required>SELECT THE COURSE</option>
            <option>ANGULAR</option>
            <option>REACT</option>
            <option>VUE</option>
          </select>
        </div>
        <br /> <br />
        <Typography
          style={{ color: "red" }}
          variant="button" display="block"
        >
          {Required}
        </Typography>
        <br></br>
        <br></br>
        <Stack spacing={45} direction="row">
          <Button variant="contained" type="submit">
            Submit
          </Button>{" "}
          {/* ype-submit t0 check the submit  button in the form */}
          <Button
            variant="contained"
            type="reset"
            onClick={(e) => {
              handleReset(e);
            }}
          >
            Reset
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
