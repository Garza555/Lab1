import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setState({ data: null, isLoading: true, hasError: null });

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

        const result = await response.json();
        console.log("Respuesta de la API:", result); // Debugging
        setState({ data: result.datos, isLoading: false, hasError: null });
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setState({ data: null, isLoading: false, hasError: error.message });
      }
    };

    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

