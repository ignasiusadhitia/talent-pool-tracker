import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const CustomCard = ({
  status,
  name,
  description,
  company,
  data,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Card style={{ margin: 2 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="lightseagreen"
                  gutterBottom
                >
                  {item.status}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2">
                  {item.description}
                  {item.company}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleUpdate(item.id)}
                  style={{ width: "50%" }}
                >
                  UPDATE
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  color="error"
                  style={{ width: "50%" }}
                >
                  DELETE
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default CustomCard;
