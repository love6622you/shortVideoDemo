import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { useState } from "react";

// type ModalProps = {
//   children: ReactNode
// }

const GlobalModal = ({ config, children }: any) => {
  const { isOpen, onClose } = config;
  const [size, setSize] = useState("md");

  return (
    <>
      <Modal
        onClose={onClose}
        size={size}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GlobalModal;
