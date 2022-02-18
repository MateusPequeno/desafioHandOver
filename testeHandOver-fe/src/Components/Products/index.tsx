import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Update, Delete } from "@material-ui/icons";
import { CardContent, Typography } from "@material-ui/core";
import api from "../../services/api";
import InsertForm from "../InsertForm";
import {
  CardContainer,
  CardMediaDiv,
  CardContentDiv,
  CardActionsDiv,
} from "./styles";

export interface DataIterface {
  id: any;
  name: string;
  prices: number;
  stockQuantity: number;
}

const Products: React.FC = () => {
  const [newToken, seNewToken] = useState("");

  useEffect(() => {
    seNewToken(`Bearer ${localStorage.getItem("token")}`);
    //seNewToken(newToken.replace(/'/g, ""));
  }, []);
  const tokenNoQuotes = newToken.replace(/"/g, "");

  const [productsList, setProductsList] = useState<DataIterface[]>([]);
  const [newProductName, setNewProductName] = useState<string>("");
  const [newProductPrice, setNewProductPrice] = useState<number>(0);
  const [newProductStockQuantity, setNewProductStockQuantity] =
    useState<number>(0);
  const [changeOnList, setChangeOnList] = useState(false);

  const openModal = async (id: number) => {
    await updateData(id);
  };

  const newData = async () => {
    await api.post(
      "/panels",
      {
        name: newProductName,
        prices: newProductPrice,
        stockQuantity: newProductStockQuantity,
      },
      {
        headers: {
          authorization: tokenNoQuotes,
        },
      }
    );

    setChangeOnList((prev) => !prev);
  };
  const getData = async () => {
    const { data } = await api.get(`/panels`);
    setProductsList(data);
  };
  const updateData = async (id: number) => {
    await api.put(
      `panels/${id}`,
      {
        name: newProductName,
        prices: newProductPrice,
        stockQuantity: newProductStockQuantity,
      },
      {
        headers: {
          authorization: tokenNoQuotes,
        },
      }
    );
    setChangeOnList((prev) => !prev);
  };
  const deleteData = async (id: any) => {
    await api.delete(`panels/${id}`, {
      headers: {
        authorization: tokenNoQuotes,
      },
    });
    setChangeOnList((prev) => !prev);
  };
  useEffect(() => {
    getData();
  }, [changeOnList]);

  return (
    <>
      <InsertForm
        buttontitle=" Inserir novo"
        onClick={() => newData()}
        onChangeName={(e) => setNewProductName(e.target.value)}
        onChangePrice={(e) => setNewProductPrice(e.target.value)}
        onChangeStockQuantity={(e) =>
          setNewProductStockQuantity(e.target.value)
        }
      />
      <Grid container justify="center" spacing={4}>
        {productsList?.map((product) => (
          <Grid item key={product?.id} xs={12} sm={6} md={4} lg={3}>
            <CardContainer>
              <CardMediaDiv title={product.name} />
              <CardContent>
                <CardContentDiv>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    R$ : {product.prices}
                  </Typography>
                </CardContentDiv>
                <Typography variant="body2" color="textSecondary" component="p">
                  Um item de nossa loja.
                  <br />
                  Quantidade em estoque: {product.stockQuantity}
                </Typography>
                <CardActionsDiv>
                  <Update
                    onClick={() => {
                      openModal(product.id);
                    }}
                  />
                  <Typography variant="body2" color="textPrimary" component="p">
                    Editar
                  </Typography>
                  <Delete
                    onClick={() => {
                      deleteData(product.id);
                    }}
                  />
                  <Typography variant="body2" color="textPrimary" component="p">
                    Deletar
                  </Typography>
                </CardActionsDiv>
              </CardContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
