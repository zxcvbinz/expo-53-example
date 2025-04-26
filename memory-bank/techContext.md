# Contesto Tecnologico

## Tecnologie Utilizzate

### Core
- **React Native**: Framework principale per lo sviluppo cross-platform
- **React Native Reusables (RNR)**: Libreria di componenti ispirata a shadcn/ui
- **TypeScript**: Linguaggio di programmazione con tipizzazione statica
- **NativeWind v4**: Utility CSS per React Native, basato su Tailwind CSS

### Componenti UI
- **@rn-primitives**: Libreria primitiva per componenti accessibili su piattaforme native
- **radix-ui/primitives**: Per componenti web quando necessario
- **react-native-reanimated**: Per animazioni fluide e performanti
- **react-native-safe-area-context**: Per gestire le safe area su diverse piattaforme

### Strumenti di Sviluppo
- **Expo** (potenzialmente): Per semplificare il processo di sviluppo
- **ESLint/Prettier**: Per formattazione e controllo della qualità del codice
- **Jest**: Per i test unitari
- **React Native Testing Library**: Per i test dei componenti

## Setup di Sviluppo
Il progetto richiede:
- Node.js (versione LTS)
- Yarn o npm come package manager
- Setup per React Native (Android Studio, Xcode, ecc.)
- Ambiente configurato per TypeScript

## Vincoli Tecnici
- Supporto per diverse dimensioni di schermo (smartphone, tablet)
- Compatibilità con iOS 13+ e Android 6.0+
- Ottimizzazione delle prestazioni per dispositivi di fascia media/bassa
- Supporto per accessibilità (VoiceOver, TalkBack)
- Dimensione dell'app mantenuta ragionevole

## Dipendenze
- Core dependencies di React Native
- NativeWind e relative dipendenze
- @rn-primitives per componenti accessibili
- Librerie di animazione e gestione layout
- Gestione dello stato (Context API, altro da definire)

## Schema delle Directory
```
project/
├── components/
│   └── ui/       # Componenti UI riutilizzabili
├── lib/          # Utility, hook, costanti
├── screens/      # Schermate dell'app
├── navigation/   # Configurazione della navigazione
├── assets/       # Immagini, font, ecc.
└── types/        # Definizioni di tipi TypeScript
```
