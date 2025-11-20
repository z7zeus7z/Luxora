import React, { useEffect, useState } from 'react';
import style from '../../styles/Account/Account.module.css';

const AccountDetails = () => {
  const savedUser = JSON.parse(localStorage.getItem("userInfo"));

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (savedUser) {
      const parts = savedUser.name.split(" ");
    const first = parts[0];
    const last = parts.slice(1).join(" ");

      setForm({
        firstName: first,
        lastName: last,
        displayName: savedUser.name,
        email: savedUser.email,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = async () => {
    try {
      const res = await fetch("https://luxora-backend-0gll.onrender.com/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${savedUser.token}`,
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          displayName: form.displayName,
          email: form.email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Update failed");
        return;
      }

      // Save updated user to localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      setMessage("Changes saved successfully!");
        setTimeout(() => {
    window.location.reload();
  }, 1000);
      setTimeout(() => setMessage(""), 2000);
    } catch  {
      setMessage("Error updating profile");
    }
  };

  return (
    <>
      <div className={style.accountDetails}>
        <div className={style.title}>
          <h4>Account Details</h4>
        </div>

        <div className={style.accountForm}>
          <form>
            <div className={style.formInput}>
              <label>
                FIRST NAME *
                <input
                  name="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                  type="text"
                />
              </label>
            </div>

            <div className={style.formInput}>
              <label>
                LAST NAME *
                <input
                  name="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                  type="text"
                />
              </label>
            </div>

            <div className={style.formInput}>
              <label>
                DISPLAY NAME *
                <input
                  name="displayName"
                  onChange={handleChange}
                  value={form.displayName}
                  type="text"
                />
              </label>
            </div>

            <div className={style.formInput}>
              <label>
                EMAIL *
                <input
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                  type="email"
                />
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className={style.accountPassword}>
        <div className={style.title}>
          <h4>Password</h4>
        </div>

        <div className={style.accountForm}>
          <form>
            <div className={style.formInput}>
              <label>
                OLD PASSWORD
                <input type="password" placeholder="Old password" />
              </label>
            </div>

            <div className={style.formInput}>
              <label>
                NEW PASSWORD
                <input type="password" placeholder="New password" />
              </label>
            </div>

            <div className={style.formInput}>
              <label>
                REPEAT NEW PASSWORD
                <input type="password" placeholder="Repeat new password" />
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className={style.saveChanges}>
        <button onClick={saveChanges}>Save changes</button>
      </div>

      {message && <p className={style.successMsg}>{message}</p>}
    </>
  );
};

export default AccountDetails;
