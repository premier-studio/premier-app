import React, { FC, useEffect } from "react";

import { Grid } from "@mui/material";

import { ListMockTokens } from "@premier-mock";

import SceneLoader, { sceneRef } from "@common/3d/scenes/skate_0";
import Clickable from "@common/components/clickable";
import Typos from "@common/components/typography";
import { useTheme } from "@common/theme";

import Style from "./style";
import Marquee from "@common/components/marquee";

const DemoPlaceholderList: {
  collectionName: string;
  collectionSymbol: string;
  contract: string;
  item: string;
  img: string;
  color: string;
}[] = [
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #7693",
    img: "https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&w=1920",
    color: "#ED2424",
  },
  {
    collectionName: "Doodles",
    collectionSymbol: "Doodles",
    contract: "0x8a90...992e",
    item: "Doodles #3686",
    img: "https://i.seadn.io/gcs/files/a5c0e8e7603a1db5ad1ab6d0380a2c22.png?auto=format&w=1920",
    color: "#98E2FF",
  },
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #6268",
    img: "models/placeholder.png",
    color: "#EDDE10",
  },
  {
    collectionName: "Cool Cats",
    collectionSymbol: "COOL",
    contract: "0x1a92...050c",
    item: "COOL #8019",
    img: "https://i.seadn.io/gcs/files/0ad7b770889648e0a6f0e208979fb24a.png?auto=format&w=1920",
    color: "#4862DD",
  },
  {
    collectionName: "Bored Ape Yatch Club",
    collectionSymbol: "BAYC",
    contract: "0xbc4c...f13d",
    item: "BAYC #8663",
    img: ListMockTokens.BoredApe.tokens[8663],
    color: "#6DB3CF",
  },
  {
    collectionName: "Moonbirds",
    collectionSymbol: "MOONBIRD",
    contract: "0x2358...a68b",
    item: "MOONB #2165",
    img: "https://i.seadn.io/gcs/files/a2015c72807bea9147d81be6150ed310.png?auto=format&w=1920",
    color: "#BA8CFA",
  },
];

const DemoTextures = ["models/0.texture.png", "models/2.texture.png", "models/1.texture.png"];

const HomeComponent: FC = ({}) => {
  const theme = useTheme();

  const sceneRef = React.useRef<sceneRef>(null!);
  const [currentVersion, setVersion] = React.useState(0);

  const [currentItem, setCurrentItem] = React.useState(0);
  const [currentItem2, setCurrentItem2] = React.useState(0);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (currentItem === DemoPlaceholderList.length - 1) {
        setCurrentItem(0);
        setColor(DemoPlaceholderList[0].color);
        sceneRef.current._changeTexturePlaceholder(DemoPlaceholderList[0].img);
      } else {
        setCurrentItem(currentItem + 1);
        setColor(DemoPlaceholderList[currentItem + 1].color);
        sceneRef.current._changeTexturePlaceholder(DemoPlaceholderList[currentItem + 1].img);
      }
    }, 5000);

    //Clean up can be done like this
    return () => {
      clearInterval(rotationInterval);
    };
  }, [currentItem]); // Add dependencies here

  const placeholderItem = DemoPlaceholderList[currentItem];

  const updateVersion = (version: number) => {
    if (!sceneRef.current) return;
    setVersion(version);
    sceneRef.current.updateVersion(
      0,
      version,
      placeholderItem.collectionSymbol,
      placeholderItem.collectionName + " #" + "123"
    );
  };

  const [color, setColor] = React.useState(placeholderItem.color);
  const [hover, setHover] = React.useState(0);

  const colored = (str: any) => <span style={{ color, fontWeight: 700 }}>{str}</span>;

  const versions = DemoTextures.map((elem) => {
    return { name: "", texture: elem };
  });

  return (
    <Style.Root>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} style={{ paddingTop: "7.5vh", paddingBottom: "10vh" }}>
          <Typos.Big style={{ textAlign: "center", fontFamily: "wide" }}>
            Get Your
            <br /> <b style={{ fontWeight: 700, color: color }}>${placeholderItem.item}</b> <br />
            On The Wall !
          </Typos.Big>
          <div style={{ height: "25px" }} />
          <Typos.Normal
            style={{ textAlign: "center", fontFamily: "wide", fontSize: "1.15em", fontWeight: 900 }}
          >
            A Brand For The New World.
          </Typos.Normal>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={9} lg={8} xl={7}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={10}
            style={{ minHeight: `calc(100vh - ${theme.header.height}` }}
          >
            <Grid item>
              <Style.ContainerExempleDrip>
                <Grid container columnSpacing={2} rowSpacing={2} direction="row-reverse">
                  <Grid item xs={12} md={7} flexGrow={1}>
                    <Grid container direction="column" style={{ height: "100%" }}>
                      <Grid item flexGrow={1} style={{ paddingTop: "5px", paddingBottom: "25px" }}>
                        <Grid container justifyContent="space-between">
                          <Grid>
                            <Typos.Normal
                              style={{
                                fontSize: "2em",
                                letterSpacing: "-0.025em",
                                fontWeight: 800,
                                color: theme.colors.primary,
                                backgroundColor: color,
                                padding: "5px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                borderRadius: "5px",
                              }}
                            >
                              Drop #0
                            </Typos.Normal>
                          </Grid>
                          <Grid>
                            <Typos.Normal style={{ fontSize: "0.8em", color: "grey" }}>
                              0 / 500 <span style={{ fontSize: "0.9em" }}>(Minted)</span>
                            </Typos.Normal>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item style={{ paddingBottom: "10px" }}>
                        <Style.ContainerExempleDripContainer style={{}}>
                          <Style.InfoDivItemName>PLACEHOLDER</Style.InfoDivItemName>
                          <Style.ContainerInfoDiv>
                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Collection: </span>
                              {placeholderItem.collectionName}
                            </Style.ContainerContract>
                            <div style={{ height: "5px" }} />

                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Contract: </span>{" "}
                              {placeholderItem.contract}
                            </Style.ContainerContract>
                            <div style={{ height: "5px" }} />

                            <Style.ContainerContract>
                              <span style={{ fontWeight: 500 }}>Item: </span>
                              {placeholderItem.item}
                            </Style.ContainerContract>
                          </Style.ContainerInfoDiv>
                        </Style.ContainerExempleDripContainer>
                      </Grid>

                      <Grid item style={{ paddingBottom: "10px" }}>
                        <Style.ContainerExempleDripContainer>
                          <Style.InfoDivItemName>DECK</Style.InfoDivItemName>
                          <Style.GalleryWrap2>
                            <Style.GalleryItem
                              $onHover={false}
                              color={versions[currentVersion].texture}
                              style={{
                                height: "50px",
                                borderRadius: "5px",
                              }}
                            />
                          </Style.GalleryWrap2>
                        </Style.ContainerExempleDripContainer>
                      </Grid>

                      <Grid item>
                        <Grid container spacing={2}>
                          <Grid item flexGrow={1}>
                            <Clickable address="/app/drop/0">
                              <Style.ButtonDiscover>Mint Now !</Style.ButtonDiscover>
                            </Clickable>
                          </Grid>

                          <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <Style.Price>0.5 ETH</Style.Price>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <img
                      src={placeholderItem.img}
                      style={{ width: "100%", height: "100%", borderRadius: "25px" }}
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Style.ContainerExempleDrip>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typos.NormalBig
                style={{
                  textAlign: "center",
                  fontFamily: "wide",
                }}
              >
                We collaborate hand to hand with artists and luxury companies to create{" "}
                <span style={{ color: color }}>custom-made</span>,{" "}
                <span style={{ color: color }}>unique</span>,{" "}
                <span style={{ color: color }}>high end</span> and{" "}
                <span style={{ color: color }}>exclusive</span> usable assets from your digital
                possessions.
              </Typos.NormalBig>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          lg={4}
          xl={5}
          style={{ minHeight: `calc(100vh - ${theme.header.height}` }}
        >
          <SceneLoader
            sceneRef={sceneRef}
            model="models/model.glb"
            initialVersion={0}
            initialId={0}
            initialPlaceholderTexture={DemoPlaceholderList[0].img}
            versions={versions}
            initialDropSymbol="random"
            initialTokenNameId="random"
          />
        </Grid>
      </Grid>

      <Style.test>
        <Marquee word="EXCLUSIVE" fontSize="1.1em" />
      </Style.test>

      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: theme.colors.secondary,
            marginTop: "5vh",
            borderRadius: "5px",
          }}
        >
          <Typos.Big
            style={{
              textAlign: "center",
              fontFamily: "wide",
            }}
          >
            Discover <span style={{ color }}>Drip</span>
          </Typos.Big>

          <div style={{ height: "25px" }} />
          <Typos.Normal
            style={{
              textAlign: "center",
              fontFamily: "wide",
              fontSize: "1.15em",
              fontWeight: 900,
              marginBottom: "7.6vh",
            }}
          >
            <span style={{ color }}>Between</span> Real World & Metaverse.
          </Typos.Normal>

          <Grid container direction="row" spacing={0}>
            <Grid xs={12} style={{ marginBottom: "7.5vh" }}>
              <Grid container justifyContent="center">
                <Grid xs={12} md={9}>
                  <Typos.NormalBig
                    style={{
                      textAlign: "center",
                      borderRadius: "5px",
                      fontWeight: 600,
                      fontFamily: "wide",
                    }}
                  >
                    A Drip is a new form of NFT that combines your NFT with a{" "}
                    <span style={{ color: color }}>customizable</span>,{" "}
                    <span style={{ color: color }}>high end</span> and{" "}
                    <span style={{ color: color }}>exclusive</span> usable asset. This asset takes a
                    physical form in the real world and a digital form in the metaverse.
                  </Typos.NormalBig>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} lg={7.5} style={{}}>
              <Grid
                container
                style={{
                  backgroundColor: theme.colors.primary,
                  padding: "25px",
                  borderRadius: "25px",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Typos.NormalBig style={{ fontFamily: "wide" }}>Mint</Typos.NormalBig>
                  <Typos.Normal
                    style={{
                      paddingTop: "25px",
                    }}
                  >
                    The first step is to {colored("mint")} your {colored("drip")}.
                    <br />
                    <br />
                    While doing so you will be able to pre-customize your {colored("Drip")}{" "}
                    accordingly to the amount of different changeable {colored("parameters")} it
                    will have.
                    <br />
                    <br />
                    Drips has two states: {colored("Default")} and {colored("Mutated")}. Right after
                    minting, a {colored("Drip")} is in a {colored("Default")} state.
                  </Typos.Normal>
                </Grid>
                <Grid item xs={1} sx={{ display: { xs: "none", sm: "block" } }} />
                <Grid item xs={5} sx={{ display: { xs: "none", sm: "block" } }}>
                  <Grid container direction="row" spacing={1} style={{ height: "100%" }}>
                    <Grid item xs={9}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "25px",
                          backgroundImage: `url(${DemoTextures[currentVersion]})`,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Style.GalleryWrap>
                        {DemoTextures.map((item, index) => (
                          <Style.GalleryItem
                            key={index}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(currentVersion)}
                            onClick={() => updateVersion(index)}
                            $onHover={hover === index}
                            color={item}
                            style={{
                              height: "50px",
                              borderRadius: "25px",
                            }}
                          />
                        ))}
                      </Style.GalleryWrap>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div style={{ height: "25px" }} />

              <Grid
                container
                style={{
                  backgroundColor: theme.colors.primary,
                  padding: "25px",
                  borderRadius: "25px",
                }}
              >
                <Grid item xs={5} sx={{ display: { xs: "none", sm: "block" } }}>
                  <img
                    src={placeholderItem.img}
                    alt=""
                    style={{ width: "100%", borderRadius: "25px" }}
                  />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={12} sm={6} style={{}}>
                  <Typos.NormalBig style={{ fontFamily: "wide" }}>Mutate</Typos.NormalBig>
                  <Typos.Normal style={{ paddingTop: "25px" }}>
                    Mutating is the fact of {colored("stamping")} your Drip with an NFT you own.
                    <br />
                    <br />
                    The {colored("mutation")} process is straightforward and the only thing you have
                    to do is to have in your {colored("wallet")} the {colored("NFT")} with which you
                    want to customize your Drip.
                    <br />
                    <br />
                    Once a Drip has been mutated, its state become {colored("Mutated")} and it is{" "}
                    {colored("irreversible")}.
                  </Typos.Normal>
                </Grid>
              </Grid>
              <div style={{ height: "25px" }} />

              <Grid
                container
                style={{
                  backgroundColor: theme.colors.primary,
                  padding: "25px",
                  borderRadius: "25px",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Typos.NormalBig style={{ fontFamily: "wide" }}>Redeem</Typos.NormalBig>
                  <Typos.Normal style={{ paddingTop: "25px" }}>
                    Being in a {colored("Mutated")} state is mandatory for a {colored("Drip")} to be{" "}
                    {colored("redeemed")}.
                    <br />
                    <br />
                    There is a {colored("cooldown period")} from the opening of a mint to the
                    opening of redeem requests.
                    <br />
                    <br />
                    On top of that, the time it will take to arrive will depends on both the{" "}
                    {colored("object")} and your {colored("location")}.
                    <br />
                    <br />
                    Note that the {colored("smart-contracts")} that will handle redeem requests will
                    come in a second {colored("phase")} that will begin right after the{" "}
                    {colored("mainnet")} deployment of the first drop.
                  </Typos.Normal>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={5} sx={{ display: { xs: "none", sm: "block" } }}>
                  <img
                    src="./delivery.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "25px", transform: "" }}
                  />
                </Grid>
              </Grid>
              <div style={{ height: "25px" }} />
            </Grid>

            <Grid xs={4} sx={{ display: { xs: "none", lg: "block" } }}>
              <SceneLoader
                sceneRef={sceneRef}
                model="models/model.glb"
                initialVersion={0}
                initialId={0}
                initialPlaceholderTexture={DemoPlaceholderList[0].img}
                versions={versions}
                initialDropSymbol="random"
                initialTokenNameId="random"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Style.test>
        <Marquee word="UNIQUE" fontSize="1.1em" />
      </Style.test>

      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: theme.colors.secondary,
            marginTop: "5vh",
          }}
        >
          <Typos.Big
            style={{
              textAlign: "center",
              fontFamily: "wide",
              marginBottom: "7.6vh",
            }}
          >
            Community
          </Typos.Big>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} xl={8}>
              <Typos.Normal>
                The first 10% holders of a Drop will share 5% of the total revenue of its mint sale.
              </Typos.Normal>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Style.test>
        <Marquee word="CUSTOM" fontSize="1.1em" />
      </Style.test>

      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: theme.colors.secondary,
            marginTop: "5vh",
          }}
        >
          <Typos.Big
            style={{
              textAlign: "center",
              fontFamily: "wide",
              marginBottom: "7.6vh",
            }}
          >
            Contact
          </Typos.Big>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} xl={8}>
              <Typos.Normal>
                The first 10% holders of a Drop will share 5% of the total revenue of its mint sale.
              </Typos.Normal>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Style.test>
        <Marquee word="UNIQUE" fontSize="1.1em" />
      </Style.test>

      <Grid container style={{ paddingBottom: "5vh" }}>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: theme.colors.secondary,
          }}
        >
          <Typos.Huge
            style={{
              marginBottom: "10vh",
              textAlign: "center",
            }}
          >
            Governance
          </Typos.Huge>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} xl={8}>
              <Typos.Normal>
                At terms, PREMIER will be community driven. It will take some time but there will be
                a governance system allowing each and every Drip owners to take part in PREMIER's
                ecosystem.
              </Typos.Normal>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Style.Root>
  );
};

export default HomeComponent;
