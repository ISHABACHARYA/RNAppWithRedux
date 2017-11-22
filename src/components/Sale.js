import React from "react";
import {
  Container,
  Content,
  Header,
  Body,
  Card,
  Input,
  Item,
  Icon,
  CardItem,
  Left,
  Right,
  Button
} from "native-base";
import { Text, Image, Dimensions, View } from "react-native";

const { height, width } = Dimensions.get("window");
export default class Sell extends React.Component {
  state = {
    items: [
      {
        code: "h1",
        wholesalePrice: 1200,
        sellingPrice: 2000,
        remainingTotal: 4,
        path: require("../image/kurti.jpeg")
      },
      {
        code: "h1",
        wholesalePrice: 1200,
        sellingPrice: 2000,
        remainingTotal: 4,
        path: require("../image/kurti.jpeg")
      },
      {
        code: "h1",
        wholesalePrice: 1200,
        sellingPrice: 2000,
        remainingTotal: 4,
        path: require("../image/kurti.jpeg")
      }
    ]
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#2979FF" }}>
          <Left>
              <Button onPress={()=> this.props.navigation.goBack(null)}>
              <Icon name='arrow-back' style={{color:'#fff', fontSize:25}}/>
              </Button>
          </Left>
          <Body>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              {" "}
              Sale
            </Text>
          </Body>
          <Right />
        </Header>

        <Item
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            borderRadius: 30,
            shadowColor: "#222",
            shadowOffset: { height: 5, width: 5 },
            elevation: 5,
            shadowOpacity: 0.3,
            marginVertical: 10
          }}
        >
          <Icon name="search" style={{ fontSize: 25, color: "#222" }} />
          <Input
            placeholder="Item Code"
            placeholderTextColor={"#bbb"}
            style={{ color: "#222", fontSize: 20, paddingLeft: 20 }}
            keyboardType="numeric"
          />
        </Item>
        <Content
          style={{
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingHorizontal: 10
          }}
        >
          <Item>
            <Card
              dataArray={this.state.items}
              renderRow={dataArray => (
                <CardItem
                  style={{
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderRadius: 5,
                    shadowColor: "#222",
                    shadowOffset: { height: 5, width: 5 },
                    elevation: 5,
                    shadowOpacity: 0.3,
                    borderWidth:1,
                    borderColor:'#2979FF'
                  }}
                >
                  <Left>
                    <Image
                      source={dataArray.path}
                      style={{ width: 150 }}
                      resizeMode={"contain"}
                    />
                  </Left>
                  <Body
                  >
                    <Right >
                      <View
                        style={{
                            backgroundColor: "#2979FF",
                            shadowColor: "#222",
                            shadowOffset: { height: 5, width: 5 },
                            elevation: 5,
                            shadowOpacity: 0.3,
                            paddingVertical:10,
                            borderRadius:10
                          }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            color: "#fff",
                            marginBottom: 10,
                          }}
                        >
                          {" "}
                          Code:{dataArray.code}{" "}
                        </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#fff",
                          marginBottom: 10
                        }}
                      >
                        {" "}
                        wholesale:{dataArray.wholesalePrice}{" "}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#fff",
                          marginBottom: 10
                        }}
                      >
                        {" "}
                        S.P:{dataArray.sellingPrice}{" "}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: "#fff",
                          marginBottom: 10
                        }}
                      >
                        {" "}
                        Pices:{dataArray.remainingTotal}{" "}
                      </Text>
                      </View>
                    </Right>
                  </Body>
                </CardItem>
              )}
            />
          </Item>
        </Content>
      </Container>
    );
  }
}
