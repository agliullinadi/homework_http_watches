import React, {useState} from "react";

export default function FormAddWatch({ calback }) {
  let [form, setForm] = useState({title: '', gmt: ''})

  const handleChange = (e) => {
    const name = e.target.name;
    setForm((prev) => ({...prev, [name]: e.target.value}))
  }

  const hangleSubmit = (e) => {
    e.preventDefault();
    calback(form);
  }

  return (
    <div className="Form">
      <form action="submit">
        <div>
          <label htmlFor="title" />Название
          <input name="title" type="text" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gmt" />Временная зона
          <input placeholder="+00:00" type="text" name="gmt" value={form.gmt} onChange={handleChange} />
        </div>
        <button type="submit" onClick={(e) => hangleSubmit(e)}>Добавить</button>
      </form>
    </div>
  );
}