import katex from 'katex'
import { useMemo } from 'react'

interface MathFormulaProps {
  formula: string
  display?: boolean
  className?: string
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        throwOnError: false,
        displayMode: display,
      })
    } catch {
      return formula
    }
  }, [formula, display])

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
