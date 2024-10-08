import { Close, Save } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";

type ActionsButtonsProps = {
  onClose: () => void;
  confirm?: () => void;
};

export const ActionsButtons: React.FC<ActionsButtonsProps> = ({
  onClose,
  confirm,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      <Button
        sx={{ width: "100%" }}
        onClick={onClose}
        startIcon={<Close sx={{ height: 20, width: 20 }} />}
        variant="outlined"
      >
        Fechar
      </Button>
      <Button
        sx={{ width: "100%" }}
        type="submit"
        startIcon={<Save sx={{ height: 20, width: 20 }} />}
        variant="contained"
      >
        Confirmar
      </Button>
    </Stack>
  );
};
