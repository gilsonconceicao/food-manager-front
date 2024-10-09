// components/ErrorBoundary.tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    // Atualiza o estado para que o próximo renderize a UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Você pode também logar o erro para um serviço de relatórios
    console.error('Erro de Hidratação:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI de fallback aqui
      return <div>Erro na renderização!</div>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
