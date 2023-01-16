import { Component, ErrorInfo, ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackRender: ({ error }: { error: Error | null }) => ReactElement;
}

interface State {
  hasError: boolean;
}

class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    console.log('🍌', _);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 嵌入SDK
    console.error('报告错误🧓', error, errorInfo);
  }

  public render(): ReactNode {
    const { children, fallbackRender } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return fallbackRender({ error: new Error('系统组件错误') });
    }
    return children;
  }
}

export default ErrorBoundry;
