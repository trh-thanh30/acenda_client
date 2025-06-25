import React from "react";
export default function ChangePassword() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl text-midnightBlue-950 font-semibold mb-4">
        Profile Information
      </h2>
      <form onSubmit={onSubmit} className="space-y-6"></form>
    </div>
  );
}
