import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";

type ModalProps = {
  type?: string;
  isLoading?: boolean;
  title?: React.ReactNode;
  content: React.ReactNode;
  hasFooter?: boolean;
  btnCallback?: () => void;
  modalProps?: any;
};

enum OKTEXT_TYPE {
  msg = "OK",
  form = "Submit"
}

const useCustomModal = ({
  type = "msg",
  isLoading,
  title,
  content,
  hasFooter = true,
  btnCallback,
  modalProps
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function getValueByKeyForStringEnum(value: string, enumData: object) {
    return Object.entries(enumData).find(([key, val]) => key === value)?.[1];
  }

  const contentText = isLoading ? <Text>Loading...</Text> : content;
  const footerText = getValueByKeyForStringEnum(type, OKTEXT_TYPE);

  const modal = (
    <Modal
      size={"lg"}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
      motionPreset="slideInBottom"
      {...modalProps}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{contentText}</ModalBody>

        {hasFooter && (
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                btnCallback && btnCallback();
              }}
            >
              {footerText}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );

  return {
    modal,
    onOpen,
    onClose
  };
};

export default useCustomModal;
