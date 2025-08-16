
const troubleshootingData = [
    {
      id: 1,
      title: "Slow Response Times",
      possibleCauses: [
        "Network Latency: High delays between your devices and the server.",
        "Overloaded Hardware: Your edge device might be running too many processes."
      ],
      quickFixes: [
        "Check your network connection speed. If possible, switch to a wired connection instead of Wi-Fi.",
        "Reboot the edge device to clear temporary processes.",
        "Reduce the number of tasks running simultaneously to free up resources"
      ]
    },
    {
      id: 2,
      title: "Device Sync Errors",
      possibleCauses: [
        "Clock synchronization issues between devices.",
        "Outdated firmware or incompatible software versions."
      ],
      quickFixes: [
        "Verify that all devices use the same time zone and NTP (Network Time Protocol) settings.",
        "Update firmware and software to the latest version recommended by the manufacturer.",
        "Restart both the source device and the receiving device after updates."
      ]
    },
    {
      id: 3,
      title: "Data Not Updating in Real-Time",
      possibleCauses: [
        "Poor connection between the data source and processing node.",
        "Cache buildup causing stale data to display."
      ],
      quickFixes: [
        "Clear the device cache.",
        "Check all cables, ports, or wireless connections for stability.",
        "Ensure your processing node has sufficient memory and storage to handle incoming data streams."
      ]
    },
    {
      id: 4,
      title: "Unexpected Shutdowns",
      possibleCauses: [
        "Overheating due to poor ventilation.",
        "Power supply fluctuations."
      ],
      quickFixes: [
        "Move your edge device to a well-ventilated area to prevent overheating.",
        "Use an uninterruptible power supply (UPS) to avoid damage from power surges or drops."
      ]
    },
    {
      id: 5,
      title: "Security Warnings or Access Denials",
      possibleCauses: [
        "Incorrect security credentials.",
        "Firewall or network policy blocking access."
      ],
      quickFixes: [
        "Double-check API keys, login details, or certificates.",
        "Work with your IT team to ensure necessary ports and protocols are whitelisted"
      ]
    }
  ];

export default function Exposition() {
    return (
        <div>
            {/* Hero Image */}
            <div className="w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-lg mb-8">
                <img
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-15/NyniFrebED.png"
                    alt="Edge computing visualization"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="pb-12 space-y-10">
                {/* Troubleshooting Sections */}
                <div className="space-y-4 max-w-4xl">
                    {troubleshootingData.map((section) => (
                        <div key={section.id} className="">
                            {/* Section Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                {section.id}. {section.title}
                            </h3>

                            {/* Possible Causes */}
                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Possible Causes:
                                </h4>
                                <ul className="space-y-1">
                                    {section.possibleCauses.map(
                                        (cause, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start"
                                            >
                                                <span className="text-gray-600 mr-2">
                                                    •
                                                </span>
                                                <span className="text-gray-700 text-sm">
                                                    {cause}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            {/* Quick Fixes */}
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Quick Fixes:
                                </h4>
                                <ul className="space-y-1">
                                    {section.quickFixes.map((fix, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="text-gray-600 mr-2">
                                                •
                                            </span>
                                            <span className="text-gray-700 text-sm">
                                                {fix}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="space-y-4 mt-6">
                        <h2 className="text-2xl font-bold">Conclusion</h2>

                        <p className="text-gray-900 leading-relaxed text-base mb-6">
                            By identifying the root cause and applying quick fixes,
                            most edge computing issues can be resolved without a
                            full-scale intervention. For more complex problems,
                            check our Advanced Troubleshooting guides or contact
                            technical support for specialized assistance.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}