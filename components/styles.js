import { StyleSheet } from 'react-native';

export const styles=StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },

  containerpage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerinfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
  },
  
  image: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  
  email: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: '90%',
    padding: 5,
    marginBottom: 10,
  },
  
  button: {
    width: '70%',
    marginBottom: 10,
  },
  
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  
  successTextStyle: {
    color: '#33691e',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
  },

  txtInput: {
    width: '80%',
    borderRadius: 5,
    padding: 5,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },

  menuIcon:{
    position: 'absolute',
    zIndex: 9,
    top: 40,
    left: 20
  },

  containermenu: {
    flex: 1,
    backgroundColor: 'skyblue',
  },

  topLink: {
    height: 160,
    backgroundColor: 'black'
  },

  bottomLink: {
    flex: 1,
    backgroundColor: '#2ecc71',
    paddingTop: 10,
    paddingBottom: 600,
  },

  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
  },

  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },

  imgView: {
    flex: 1,
    paddingLeft: 30,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profiletext: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },

  footer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#2ecc71',
    alignItems:'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray'
  },

  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'white',
  },

  description:{
    flex: 1,
    marginLeft: 20,
    fontSize: 15,
    color: 'white',
  },

  scroller: {
    flex: 1,
  },

  userProfileImageView: {
    position: 'absolute',
    height: 330,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  userProfileBackgroundImage: {
    height: 200,
    width: '100%',
  },

  userProfileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    paddingTop: 23,
  },

  custom: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    marginTop: 150,
    height: 180,
  },

  userProfileInfo: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    margin: 15,
    alignItems: 'center'
  },

  userProfileName: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },

  userProfileType: {
    fontSize: 15,
    color: '#848484',
    flex: 1,
    width: '100%',
    textAlign: 'center',
  },

  userContacts: {
    flex: 1,
    color: '#537791',
    height: 40,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: 'rgb(210,210,210)',
    paddingLeft: 15,
    paddingTop: 5,
  }
});