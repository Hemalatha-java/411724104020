import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM tasks ORDER BY id DESC", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {

    const { task } = req.body;

    db.query(
        "INSERT INTO tasks(task) VALUES(?)",
        [task],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Task Added"
            });

        }
    );

});

router.put("/:id", (req, res) => {

    const id = req.params.id;
    const { task } = req.body;

    db.query(
        "UPDATE tasks SET task=? WHERE id=?",
        [task, id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Task Updated"
            });

        }
    );

});

router.delete("/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM tasks WHERE id=?",
        [id],
        (err) => {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Task Deleted"
            });

        }
    );

});

export default router;