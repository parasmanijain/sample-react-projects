import { useState } from "react";
import classes from './AnchorDropdown.module.scss';

export default function AnchorDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className={classes["container"]}>
            <button
                className={classes["menuButton"]}
                onClick={() => setOpen(o => !o)}
            >
                Open Menu ⌄
            </button>

            {open && (
                <div className={classes["dropdown"]}>
                    <div>Profile</div>
                    <div>Settings</div>
                    <div>Logout</div>
                </div>
            )}
        </div>
    );
}
