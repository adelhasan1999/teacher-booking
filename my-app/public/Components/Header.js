// components/Header.js

export default function Header() {
    return (
      <header className="header">
        <h1 className="header-title">Teacher Booking Website</h1>
        <div className="header-icons">
          <span title="Profile">Profile</span>
          <span title="Settings">Settings</span>
          <span title="Logout">Logout</span>
        </div>
      </header>
    );
}