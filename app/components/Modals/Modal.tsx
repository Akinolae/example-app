import { StyleSheet, Text, View } from "react-native";
import Modal, { ModalProps } from "react-native-modal";

const CustomModal = (props: ModalProps) => {
  return (
    <Modal
      style={styles.modal}
      {...props}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      avoidKeyboard={true}
    >
      <View style={styles.modalWrapper}>{props.children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  modal: {
    flexDirection: "column",
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: "30%",
  },
});

export default CustomModal;
